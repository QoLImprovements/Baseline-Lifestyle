/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "bar",
  "description": "Snacks",
  "id": "usda-sr-legacy-174799",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 68.0,
      "key": "bar",
      "kind": "unit",
      "label": "bar"
    }
  ],
  "name": "Snacks, CLIF BAR, mixed flavors",
  "nutritionPerBasis": {
    "calcium_mg": 368.0,
    "carbs_g": 65.4,
    "energy_kcal": 1450.0,
    "fat_g": 5.88,
    "fibre_g": 7.4,
    "folate_ug": 118.0,
    "iron_mg": 6.62,
    "magnesium_mg": 147.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 294.0,
    "potassium_mg": 412.0,
    "protein_g": 14.7,
    "salt_g": 0.4875,
    "sat_fat_g": 1.47,
    "sodium_mg": 195.0,
    "sugar_g": 31.6,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 88.2,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 36.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174799",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "other-foods",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
