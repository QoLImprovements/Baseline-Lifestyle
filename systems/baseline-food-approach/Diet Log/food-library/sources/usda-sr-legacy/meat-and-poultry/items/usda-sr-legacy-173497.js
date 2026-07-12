/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "jar",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-173497",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "jar",
      "kind": "unit",
      "label": "jar"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Babyfood, dinner, chicken stew, toddler",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 6.4,
    "energy_kcal": 326.0,
    "fat_g": 3.7,
    "fibre_g": 0.6,
    "folate_ug": 16.0,
    "iron_mg": 0.66,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 51.0,
    "potassium_mg": 92.0,
    "protein_g": 5.2,
    "salt_g": 0.0625,
    "sat_fat_g": 1.1,
    "sodium_mg": 25.0,
    "sugar_g": 1.68,
    "vitamin_a_ug": 52.0,
    "vitamin_c_mg": 1.9,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 3.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173497",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
