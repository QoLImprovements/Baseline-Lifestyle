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
  "id": "usda-sr-legacy-172680",
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
      "gramsPerUnit": 32.0,
      "key": "slice-large",
      "kind": "unit",
      "label": "slice, large"
    },
    {
      "gramsPerUnit": 26.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 23.0,
      "key": "slice-thin",
      "kind": "unit",
      "label": "slice, thin"
    }
  ],
  "name": "Bread, raisin, enriched",
  "nutritionPerBasis": {
    "calcium_mg": 66.0,
    "carbs_g": 52.3,
    "energy_kcal": 1150.0,
    "fat_g": 4.4,
    "fibre_g": 4.3,
    "folate_ug": 106.0,
    "iron_mg": 2.9,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 109.0,
    "potassium_mg": 227.0,
    "protein_g": 7.9,
    "salt_g": 0.8675,
    "sat_fat_g": 1.08,
    "sodium_mg": 347.0,
    "sugar_g": 5.68,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172680",
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
