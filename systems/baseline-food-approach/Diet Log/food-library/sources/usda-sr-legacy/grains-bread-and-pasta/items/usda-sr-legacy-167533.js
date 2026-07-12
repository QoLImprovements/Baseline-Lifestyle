/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "bagel",
  "description": "Baked Products",
  "id": "usda-sr-legacy-167533",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 98.0,
      "key": "bagel",
      "kind": "unit",
      "label": "bagel"
    }
  ],
  "name": "Bagels, wheat",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 48.9,
    "energy_kcal": 1050.0,
    "fat_g": 1.53,
    "fibre_g": 4.1,
    "folate_ug": 76.0,
    "iron_mg": 2.76,
    "magnesium_mg": 51.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 142.0,
    "potassium_mg": 165.0,
    "protein_g": 10.2,
    "salt_g": 1.0975,
    "sat_fat_g": 0.0,
    "sodium_mg": 439.0,
    "sugar_g": 6.12,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167533",
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
