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
  "id": "usda-sr-legacy-175006",
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
      "gramsPerUnit": 77.0,
      "key": "pancake-6-dia",
      "kind": "unit",
      "label": "pancake (6\" dia)"
    },
    {
      "gramsPerUnit": 38.0,
      "key": "pancake-4-dia",
      "kind": "unit",
      "label": "pancake (4\" dia)"
    }
  ],
  "name": "Pancakes, plain, dry mix, complete, prepared",
  "nutritionPerBasis": {
    "calcium_mg": 126.0,
    "carbs_g": 36.7,
    "energy_kcal": 812.0,
    "fat_g": 2.5,
    "fibre_g": 1.3,
    "folate_ug": 37.0,
    "iron_mg": 1.56,
    "magnesium_mg": 20.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 334.0,
    "potassium_mg": 175.0,
    "protein_g": 5.2,
    "salt_g": 1.57,
    "sat_fat_g": 0.507,
    "sodium_mg": 628.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175006",
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
