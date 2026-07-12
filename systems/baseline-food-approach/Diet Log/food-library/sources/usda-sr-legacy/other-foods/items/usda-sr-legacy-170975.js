/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-170975",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 6.5,
      "key": "cookie",
      "kind": "unit",
      "label": "cookie"
    }
  ],
  "name": "Babyfood, cookies",
  "nutritionPerBasis": {
    "calcium_mg": 101.0,
    "carbs_g": 67.1,
    "energy_kcal": 1810.0,
    "fat_g": 13.2,
    "fibre_g": 0.2,
    "folate_ug": 93.0,
    "iron_mg": 4.18,
    "magnesium_mg": 49.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 179.0,
    "potassium_mg": 501.0,
    "protein_g": 11.8,
    "salt_g": 0.75,
    "sat_fat_g": 2.35,
    "sodium_mg": 300.0,
    "sugar_g": 24.2,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 7.0,
    "vitamin_e_mg": 0.46,
    "vitamin_k_ug": 1.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170975",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
