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
  "id": "usda-sr-legacy-172756",
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
      "gramsPerUnit": 41.0,
      "key": "cruller-3-dia",
      "kind": "unit",
      "label": "cruller (3\" dia)"
    }
  ],
  "name": "Doughnuts, french crullers, glazed",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 59.5,
    "energy_kcal": 1720.0,
    "fat_g": 18.3,
    "fibre_g": 1.2,
    "folate_ug": 42.0,
    "iron_mg": 2.42,
    "magnesium_mg": 12.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 123.0,
    "potassium_mg": 78.0,
    "protein_g": 3.1,
    "salt_g": 0.8625,
    "sat_fat_g": 4.67,
    "sodium_mg": 345.0,
    "sugar_g": 35.1,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 8.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172756",
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
