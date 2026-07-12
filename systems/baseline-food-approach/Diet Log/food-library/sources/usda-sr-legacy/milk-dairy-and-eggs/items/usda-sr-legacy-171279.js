/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-171279",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 246.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 30.8,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Milk, human, mature, fluid (For Reference Only)",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 6.89,
    "energy_kcal": 70.0,
    "fat_g": 4.38,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.03,
    "magnesium_mg": 3.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 14.0,
    "potassium_mg": 51.0,
    "protein_g": 1.03,
    "salt_g": 0.0425,
    "sat_fat_g": 2.01,
    "sodium_mg": 17.0,
    "sugar_g": 6.89,
    "vitamin_a_ug": 61.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171279",
  "state": "Unspecified",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
