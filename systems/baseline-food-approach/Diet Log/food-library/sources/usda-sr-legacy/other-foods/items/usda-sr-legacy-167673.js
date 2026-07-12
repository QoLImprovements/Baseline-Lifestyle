/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "steak",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-167673",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 107.0,
      "key": "steak",
      "kind": "unit",
      "label": "steak"
    }
  ],
  "name": "DENNY'S, top sirloin steak",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 0.14,
    "energy_kcal": 182.0,
    "fat_g": 7.34,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 3.27,
    "magnesium_mg": 24.0,
    "omega3_g": 0.067,
    "phosphorus_mg": 264.0,
    "potassium_mg": 341.0,
    "protein_g": 28.9,
    "salt_g": 0.8725,
    "sat_fat_g": 2.6,
    "sodium_mg": 349.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 1.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167673",
  "state": "Unspecified",
  "subcategory": "Restaurant Foods",
  "tags": [
    "other-foods",
    "restaurant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
