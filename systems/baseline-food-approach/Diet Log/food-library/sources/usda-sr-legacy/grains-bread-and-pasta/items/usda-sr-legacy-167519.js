/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "waffle-round-4-dia",
  "description": "Baked Products",
  "id": "usda-sr-legacy-167519",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "waffle-round-4-dia",
      "kind": "unit",
      "label": "waffle, round (4\"dia)"
    }
  ],
  "name": "Waffle, plain, frozen, ready-to-heat, microwave",
  "nutritionPerBasis": {
    "calcium_mg": 197.0,
    "carbs_g": 45.4,
    "energy_kcal": 298.0,
    "fat_g": 9.91,
    "fibre_g": 2.4,
    "folate_ug": 67.0,
    "iron_mg": 5.81,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 410.0,
    "potassium_mg": 148.0,
    "protein_g": 6.71,
    "salt_g": 1.705,
    "sat_fat_g": 1.58,
    "sodium_mg": 682.0,
    "sugar_g": 5.04,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.95,
    "vitamin_k_ug": 8.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167519",
  "state": "Frozen",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "frozen",
    "grains-bread-and-pasta"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
