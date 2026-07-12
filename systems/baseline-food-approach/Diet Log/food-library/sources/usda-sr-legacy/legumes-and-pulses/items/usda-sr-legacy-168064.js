/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "cup",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-168064",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 146.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 461.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Restaurant, Latino, Arroz con frijoles negros (rice and black beans)",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 24.4,
    "energy_kcal": 151.0,
    "fat_g": 3.85,
    "fibre_g": 3.4,
    "folate_ug": 0.0,
    "iron_mg": 1.57,
    "magnesium_mg": 26.0,
    "omega3_g": 0.239,
    "phosphorus_mg": 87.0,
    "potassium_mg": 224.0,
    "protein_g": 4.64,
    "salt_g": 1.05,
    "sat_fat_g": 0.729,
    "sodium_mg": 420.0,
    "sugar_g": 0.86,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.47,
    "vitamin_k_ug": 10.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168064",
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
