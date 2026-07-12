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
  "id": "usda-sr-legacy-171259",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 235.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 12.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Sour dressing, non-butterfat, cultured, filled cream-type",
  "nutritionPerBasis": {
    "calcium_mg": 113.0,
    "carbs_g": 4.68,
    "energy_kcal": 178.0,
    "fat_g": 16.6,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 0.03,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 87.0,
    "potassium_mg": 162.0,
    "protein_g": 3.25,
    "salt_g": 0.12,
    "sat_fat_g": 13.3,
    "sodium_mg": 48.0,
    "sugar_g": 4.68,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 1.34,
    "vitamin_k_ug": 4.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171259",
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
