/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "serving",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-167731",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Babyfood, cereal, rice with pears and apple, dry, instant fortified",
  "nutritionPerBasis": {
    "calcium_mg": 38.0,
    "carbs_g": 88.5,
    "energy_kcal": 1630.0,
    "fat_g": 0.9,
    "fibre_g": 2.6,
    "folate_ug": 5.0,
    "iron_mg": 9.0,
    "magnesium_mg": 37.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 253.0,
    "potassium_mg": 414.0,
    "protein_g": 6.6,
    "salt_g": 0.005,
    "sat_fat_g": 0.185,
    "sodium_mg": 2.0,
    "sugar_g": 1.35,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 250.0,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167731",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
