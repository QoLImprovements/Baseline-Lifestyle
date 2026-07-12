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
  "id": "usda-sr-legacy-174931",
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
      "gramsPerUnit": 100.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    }
  ],
  "name": "Bread, stuffing, dry mix, prepared",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 18.8,
    "energy_kcal": 815.0,
    "fat_g": 12.0,
    "fibre_g": 0.8,
    "folate_ug": 37.0,
    "iron_mg": 0.95,
    "magnesium_mg": 11.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 38.0,
    "potassium_mg": 67.0,
    "protein_g": 2.73,
    "salt_g": 1.1975,
    "sat_fat_g": 2.32,
    "sodium_mg": 479.0,
    "sugar_g": 2.04,
    "vitamin_a_ug": 114.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.34,
    "vitamin_k_ug": 13.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174931",
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
