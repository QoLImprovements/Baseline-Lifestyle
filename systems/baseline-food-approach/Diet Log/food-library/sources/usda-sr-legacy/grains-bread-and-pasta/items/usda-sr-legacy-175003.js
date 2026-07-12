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
  "id": "usda-sr-legacy-175003",
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
    }
  ],
  "name": "Muffins, corn, dry mix, prepared",
  "nutritionPerBasis": {
    "calcium_mg": 75.0,
    "carbs_g": 49.1,
    "energy_kcal": 1340.0,
    "fat_g": 10.2,
    "fibre_g": 2.4,
    "folate_ug": 57.0,
    "iron_mg": 1.94,
    "magnesium_mg": 21.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 384.0,
    "potassium_mg": 131.0,
    "protein_g": 7.4,
    "salt_g": 1.9875,
    "sat_fat_g": 2.8,
    "sodium_mg": 795.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 41.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175003",
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
