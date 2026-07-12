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
  "id": "usda-sr-legacy-173732",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 249.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Beans, baked, canned, with pork and sweet sauce",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 21.6,
    "energy_kcal": 441.0,
    "fat_g": 0.89,
    "fibre_g": 4.4,
    "folate_ug": 8.0,
    "iron_mg": 1.4,
    "magnesium_mg": 30.0,
    "omega3_g": 0.179,
    "phosphorus_mg": 88.0,
    "potassium_mg": 231.0,
    "protein_g": 4.52,
    "salt_g": 0.9775,
    "sat_fat_g": 0.231,
    "sodium_mg": 391.0,
    "sugar_g": 8.23,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173732",
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
