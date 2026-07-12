/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "item",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170710",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 171.0,
      "key": "item",
      "kind": "unit",
      "label": "item"
    }
  ],
  "name": "Fast foods, hamburger, large, single patty, with condiments",
  "nutritionPerBasis": {
    "calcium_mg": 87.0,
    "carbs_g": 22.1,
    "energy_kcal": 1070.0,
    "fat_g": 11.6,
    "fibre_g": 1.1,
    "folate_ug": 22.0,
    "iron_mg": 1.73,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 121.0,
    "potassium_mg": 225.0,
    "protein_g": 15.7,
    "salt_g": 0.935,
    "sat_fat_g": 4.78,
    "sodium_mg": 374.0,
    "sugar_g": 3.67,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 5.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170710",
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
