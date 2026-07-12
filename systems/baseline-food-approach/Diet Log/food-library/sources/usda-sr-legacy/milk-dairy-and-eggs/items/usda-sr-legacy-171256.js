/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "tbsp",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-171256",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 242.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Cream, sour, reduced fat, cultured",
  "nutritionPerBasis": {
    "calcium_mg": 104.0,
    "carbs_g": 4.26,
    "energy_kcal": 563.0,
    "fat_g": 12.0,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 0.07,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 95.0,
    "potassium_mg": 129.0,
    "protein_g": 2.94,
    "salt_g": 0.2225,
    "sat_fat_g": 7.47,
    "sodium_mg": 89.0,
    "sugar_g": 0.16,
    "vitamin_a_ug": 102.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.34,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171256",
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
