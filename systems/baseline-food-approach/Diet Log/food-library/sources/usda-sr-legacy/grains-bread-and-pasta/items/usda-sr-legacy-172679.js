/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "slice",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172679",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Bread, oatmeal, toasted",
  "nutritionPerBasis": {
    "calcium_mg": 72.0,
    "carbs_g": 52.7,
    "energy_kcal": 1220.0,
    "fat_g": 4.8,
    "fibre_g": 4.3,
    "folate_ug": 53.0,
    "iron_mg": 2.94,
    "magnesium_mg": 41.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 137.0,
    "potassium_mg": 154.0,
    "protein_g": 9.2,
    "salt_g": 1.215,
    "sat_fat_g": 0.764,
    "sodium_mg": 486.0,
    "sugar_g": 8.84,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.53,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172679",
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
