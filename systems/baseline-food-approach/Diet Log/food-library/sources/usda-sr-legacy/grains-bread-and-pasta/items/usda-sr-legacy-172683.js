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
  "id": "usda-sr-legacy-172683",
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
      "gramsPerUnit": 19.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "Bread, reduced-calorie, oat bran, toasted",
  "nutritionPerBasis": {
    "calcium_mg": 68.0,
    "carbs_g": 49.2,
    "energy_kcal": 1000.0,
    "fat_g": 3.8,
    "fibre_g": 14.3,
    "folate_ug": 82.0,
    "iron_mg": 3.75,
    "magnesium_mg": 55.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 144.0,
    "potassium_mg": 122.0,
    "protein_g": 9.5,
    "salt_g": 1.3675,
    "sat_fat_g": 0.53,
    "sodium_mg": 547.0,
    "sugar_g": 4.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.33,
    "vitamin_k_ug": 2.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172683",
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
