/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "cup",
  "description": "Restaurant Foods",
  "id": "usda-foundation-334536",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 133.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Restaurant, Chinese, fried rice, without meat",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 32.5,
    "energy_kcal": 174.0,
    "fat_g": 3.19,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.46,
    "magnesium_mg": 9.7,
    "omega3_g": 0.118,
    "phosphorus_mg": 44.0,
    "potassium_mg": 69.0,
    "protein_g": 3.84,
    "salt_g": 0.9025,
    "sat_fat_g": 0.493,
    "sodium_mg": 361.0,
    "sugar_g": 0.62,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "334536",
  "state": "Fried",
  "subcategory": "Restaurant Foods",
  "tags": [
    "fried",
    "meat-and-poultry",
    "restaurant-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
