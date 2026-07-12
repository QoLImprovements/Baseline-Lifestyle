/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "6-inch-sub",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170315",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 196.0,
      "key": "6-inch-sub",
      "kind": "unit",
      "label": "6 inch sub"
    },
    {
      "gramsPerUnit": 391.0,
      "key": "12-inch-sub",
      "kind": "unit",
      "label": "12 inch sub"
    }
  ],
  "name": "SUBWAY, cold cut sub on white bread with lettuce and tomato",
  "nutritionPerBasis": {
    "calcium_mg": 171.0,
    "carbs_g": 20.4,
    "energy_kcal": 214.0,
    "fat_g": 10.0,
    "fibre_g": 1.2,
    "folate_ug": 66.0,
    "iron_mg": 1.81,
    "magnesium_mg": 20.0,
    "omega3_g": 0.112,
    "phosphorus_mg": 112.0,
    "potassium_mg": 282.0,
    "protein_g": 10.5,
    "salt_g": 1.4375,
    "sat_fat_g": 3.55,
    "sodium_mg": 575.0,
    "sugar_g": 3.18,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 7.5,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170315",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
