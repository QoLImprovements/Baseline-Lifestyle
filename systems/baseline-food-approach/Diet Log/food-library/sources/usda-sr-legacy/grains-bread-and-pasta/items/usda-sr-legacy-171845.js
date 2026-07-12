/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "piece",
  "description": "Baked Products",
  "id": "usda-sr-legacy-171845",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    }
  ],
  "name": "Bread, naan, plain, commercially prepared, refrigerated",
  "nutritionPerBasis": {
    "calcium_mg": 84.0,
    "carbs_g": 50.4,
    "energy_kcal": 1220.0,
    "fat_g": 5.65,
    "fibre_g": 2.2,
    "folate_ug": 102.0,
    "iron_mg": 3.25,
    "magnesium_mg": 27.0,
    "omega3_g": 0.276,
    "phosphorus_mg": 100.0,
    "potassium_mg": 125.0,
    "protein_g": 9.62,
    "salt_g": 1.1625,
    "sat_fat_g": 1.39,
    "sodium_mg": 465.0,
    "sugar_g": 3.55,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.79,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171845",
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
