/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "patty",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170794",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 86.0,
      "key": "patty",
      "kind": "unit",
      "label": "patty"
    }
  ],
  "name": "School Lunch, chicken patty, whole grain breaded",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 12.5,
    "energy_kcal": 246.0,
    "fat_g": 13.9,
    "fibre_g": 2.3,
    "folate_ug": 9.0,
    "iron_mg": 3.77,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 221.0,
    "potassium_mg": 278.0,
    "protein_g": 17.6,
    "salt_g": 1.1675,
    "sat_fat_g": 2.64,
    "sodium_mg": 467.0,
    "sugar_g": 0.55,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 1.36,
    "vitamin_k_ug": 4.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170794",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
