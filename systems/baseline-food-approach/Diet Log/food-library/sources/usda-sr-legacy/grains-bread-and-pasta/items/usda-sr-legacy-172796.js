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
  "id": "usda-sr-legacy-172796",
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
      "gramsPerUnit": 44.0,
      "key": "roll-1-serving",
      "kind": "unit",
      "label": "roll 1 serving"
    }
  ],
  "name": "Rolls, hamburger or hotdog, plain",
  "nutritionPerBasis": {
    "calcium_mg": 144.0,
    "carbs_g": 50.1,
    "energy_kcal": 1170.0,
    "fat_g": 3.91,
    "fibre_g": 1.8,
    "folate_ug": 94.0,
    "iron_mg": 3.43,
    "magnesium_mg": 23.0,
    "omega3_g": 0.176,
    "phosphorus_mg": 101.0,
    "potassium_mg": 122.0,
    "protein_g": 9.77,
    "salt_g": 1.235,
    "sat_fat_g": 0.842,
    "sodium_mg": 494.0,
    "sugar_g": 7.28,
    "vitamin_a_ug": 29.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 4.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172796",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
