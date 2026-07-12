/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "quantity-not-specified",
  "description": "Rice mixed dishes",
  "id": "usda-fndds-2706723",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 300.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Paella, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 15.8,
    "energy_kcal": 169.0,
    "fat_g": 7.17,
    "fibre_g": 0.6,
    "folate_ug": 30.0,
    "iron_mg": 1.27,
    "magnesium_mg": 15.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 100.0,
    "potassium_mg": 126.0,
    "protein_g": 9.53,
    "salt_g": 1.8425,
    "sat_fat_g": 1.89,
    "sodium_mg": 737.0,
    "sugar_g": 0.67,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.84,
    "vitamin_k_ug": 2.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706723",
  "state": "Unspecified",
  "subcategory": "Rice mixed dishes",
  "tags": [
    "grains-bread-and-pasta",
    "rice-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
