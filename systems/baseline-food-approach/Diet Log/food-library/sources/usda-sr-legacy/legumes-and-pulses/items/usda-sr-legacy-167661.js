/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "piece",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-167661",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 126.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    }
  ],
  "name": "Restaurant, Latino, pupusas con frijoles (pupusas, bean)",
  "nutritionPerBasis": {
    "calcium_mg": 51.0,
    "carbs_g": 31.5,
    "energy_kcal": 960.0,
    "fat_g": 9.01,
    "fibre_g": 5.8,
    "folate_ug": 0.0,
    "iron_mg": 1.46,
    "magnesium_mg": 54.0,
    "omega3_g": 0.336,
    "phosphorus_mg": 144.0,
    "potassium_mg": 305.0,
    "protein_g": 5.59,
    "salt_g": 0.7625,
    "sat_fat_g": 2.19,
    "sodium_mg": 305.0,
    "sugar_g": 1.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.36,
    "vitamin_k_ug": 7.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167661",
  "state": "Unspecified",
  "subcategory": "Restaurant Foods",
  "tags": [
    "legumes-and-pulses",
    "restaurant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
