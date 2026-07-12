/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "g",
  "description": "Calculated from 37g powder to 190ml water",
  "id": "cofid-old-17-262",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Soup powder, instant, reduced calorie, assorted flavours, as served",
  "nutritionPerBasis": {
    "calcium_mg": 45.0,
    "carbs_g": 8.4,
    "energy_kcal": 53.0,
    "fat_g": 1.5,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.6,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 51.0,
    "potassium_mg": 100.0,
    "protein_g": 2.0,
    "salt_g": 2.375,
    "sat_fat_g": 0.0,
    "sodium_mg": 950.0,
    "sugar_g": 0.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "17-262",
  "state": "Unspecified",
  "subcategory": "WAE",
  "tags": [
    "soups",
    "unspecified",
    "wae"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
