/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "5-pieces",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-172035",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 109.0,
      "key": "5-pieces",
      "kind": "unit",
      "label": "5 pieces"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "3-pieces",
      "kind": "unit",
      "label": "3 pieces"
    }
  ],
  "name": "Fast foods, french toast sticks",
  "nutritionPerBasis": {
    "calcium_mg": 53.0,
    "carbs_g": 41.2,
    "energy_kcal": 340.0,
    "fat_g": 17.7,
    "fibre_g": 1.4,
    "folate_ug": 183.0,
    "iron_mg": 1.92,
    "magnesium_mg": 19.0,
    "omega3_g": 0.145,
    "phosphorus_mg": 87.0,
    "potassium_mg": 111.0,
    "protein_g": 6.0,
    "salt_g": 1.0,
    "sat_fat_g": 3.99,
    "sodium_mg": 400.0,
    "sugar_g": 9.89,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.88,
    "vitamin_k_ug": 14.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172035",
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
