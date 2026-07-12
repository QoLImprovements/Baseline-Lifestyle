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
  "id": "usda-sr-legacy-172770",
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
      "gramsPerUnit": 198.0,
      "key": "package-7-oz",
      "kind": "unit",
      "label": "package (7 oz)"
    }
  ],
  "name": "Muffins, wheat bran, dry mix",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 73.0,
    "energy_kcal": 1660.0,
    "fat_g": 12.0,
    "fibre_g": 0.0,
    "folate_ug": 85.0,
    "iron_mg": 3.6,
    "magnesium_mg": 87.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 480.0,
    "potassium_mg": 200.0,
    "protein_g": 7.1,
    "salt_g": 1.75,
    "sat_fat_g": 2.94,
    "sodium_mg": 700.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172770",
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
