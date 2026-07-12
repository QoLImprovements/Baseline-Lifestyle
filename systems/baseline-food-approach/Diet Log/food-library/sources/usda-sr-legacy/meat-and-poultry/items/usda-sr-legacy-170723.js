/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "item",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170723",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "item",
      "kind": "unit",
      "label": "item"
    }
  ],
  "name": "WENDY'S, Homestyle Chicken Fillet Sandwich",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 21.6,
    "energy_kcal": 214.0,
    "fat_g": 8.1,
    "fibre_g": 1.3,
    "folate_ug": 0.0,
    "iron_mg": 1.5,
    "magnesium_mg": 24.0,
    "omega3_g": 0.233,
    "phosphorus_mg": 161.0,
    "potassium_mg": 228.0,
    "protein_g": 13.8,
    "salt_g": 1.0025,
    "sat_fat_g": 1.62,
    "sodium_mg": 401.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 10.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170723",
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
