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
  "id": "usda-sr-legacy-170690",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 91.0,
      "key": "sandwich",
      "kind": "unit",
      "label": "sandwich"
    }
  ],
  "name": "Fast foods, cheeseburger; single, regular patty; plain",
  "nutritionPerBasis": {
    "calcium_mg": 119.0,
    "carbs_g": 28.0,
    "energy_kcal": 1290.0,
    "fat_g": 14.7,
    "fibre_g": 2.0,
    "folate_ug": 70.0,
    "iron_mg": 2.71,
    "magnesium_mg": 26.0,
    "omega3_g": 0.14,
    "phosphorus_mg": 161.0,
    "potassium_mg": 196.0,
    "protein_g": 16.5,
    "salt_g": 1.2875,
    "sat_fat_g": 6.47,
    "sodium_mg": 515.0,
    "sugar_g": 4.88,
    "vitamin_a_ug": 50.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.52,
    "vitamin_k_ug": 4.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170690",
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
