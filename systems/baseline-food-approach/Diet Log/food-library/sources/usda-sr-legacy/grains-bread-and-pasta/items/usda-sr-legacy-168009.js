/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "Baked Products",
  "id": "usda-sr-legacy-168009",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Schar, Gluten-Free, Wheat-Free, Classic White Bread",
  "nutritionPerBasis": {
    "calcium_mg": 159.0,
    "carbs_g": 46.1,
    "energy_kcal": 1000.0,
    "fat_g": 4.47,
    "fibre_g": 5.1,
    "folate_ug": 15.0,
    "iron_mg": 3.17,
    "magnesium_mg": 11.0,
    "omega3_g": 0.016,
    "phosphorus_mg": 55.0,
    "potassium_mg": 66.0,
    "protein_g": 3.81,
    "salt_g": 1.1025,
    "sat_fat_g": 0.977,
    "sodium_mg": 441.0,
    "sugar_g": 3.34,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168009",
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
