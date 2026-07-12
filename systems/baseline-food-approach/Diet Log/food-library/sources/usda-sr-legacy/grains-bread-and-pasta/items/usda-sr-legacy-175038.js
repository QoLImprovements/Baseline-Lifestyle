/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-175038",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "waffle-square-4-square-include-frozen",
      "kind": "unit",
      "label": "waffle, square (4\" square) (include frozen)"
    }
  ],
  "name": "Waffles, plain, frozen, ready-to-heat",
  "nutritionPerBasis": {
    "calcium_mg": 308.0,
    "carbs_g": 43.0,
    "energy_kcal": 1190.0,
    "fat_g": 9.7,
    "fibre_g": 2.2,
    "folate_ug": 68.0,
    "iron_mg": 5.61,
    "magnesium_mg": 23.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 361.0,
    "potassium_mg": 125.0,
    "protein_g": 6.47,
    "salt_g": 1.595,
    "sat_fat_g": 1.53,
    "sodium_mg": 638.0,
    "sugar_g": 4.91,
    "vitamin_a_ug": 381.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.05,
    "vitamin_k_ug": 7.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175038",
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
