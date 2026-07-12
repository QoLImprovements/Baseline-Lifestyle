/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "cup",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-173733",
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
    }
  ],
  "name": "Beans, baked, canned, with pork and tomato sauce",
  "nutritionPerBasis": {
    "calcium_mg": 56.0,
    "carbs_g": 18.7,
    "energy_kcal": 94.0,
    "fat_g": 0.93,
    "fibre_g": 4.0,
    "folate_ug": 15.0,
    "iron_mg": 3.24,
    "magnesium_mg": 34.0,
    "omega3_g": 0.039,
    "phosphorus_mg": 116.0,
    "potassium_mg": 295.0,
    "protein_g": 5.15,
    "salt_g": 1.0925,
    "sat_fat_g": 0.293,
    "sodium_mg": 437.0,
    "sugar_g": 5.67,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173733",
  "state": "Baked",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "baked",
    "legumes-and-legume-products",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
