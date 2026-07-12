/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "sandwich",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-173319",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "sandwich",
      "kind": "unit",
      "label": "sandwich"
    }
  ],
  "name": "Fast foods, cheeseburger; double, regular patty; with condiments",
  "nutritionPerBasis": {
    "calcium_mg": 150.0,
    "carbs_g": 18.0,
    "energy_kcal": 282.0,
    "fat_g": 16.2,
    "fibre_g": 0.9,
    "folate_ug": 43.0,
    "iron_mg": 2.35,
    "magnesium_mg": 21.0,
    "omega3_g": 0.128,
    "phosphorus_mg": 165.0,
    "potassium_mg": 226.0,
    "protein_g": 16.2,
    "salt_g": 1.5425,
    "sat_fat_g": 6.96,
    "sodium_mg": 617.0,
    "sugar_g": 4.16,
    "vitamin_a_ug": 44.0,
    "vitamin_c_mg": 2.9,
    "vitamin_e_mg": 0.35,
    "vitamin_k_ug": 4.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173319",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
