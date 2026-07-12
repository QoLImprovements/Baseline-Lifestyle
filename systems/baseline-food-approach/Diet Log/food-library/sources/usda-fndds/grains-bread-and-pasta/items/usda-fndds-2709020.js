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
  "id": "usda-fndds-2709020",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 129.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 172.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Rice, white, with carrots and dark green vegetables, NS as to fat",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 22.5,
    "energy_kcal": 124.0,
    "fat_g": 2.44,
    "fibre_g": 0.9,
    "folate_ug": 51.0,
    "iron_mg": 1.01,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 43.0,
    "potassium_mg": 91.0,
    "protein_g": 2.38,
    "salt_g": 0.4825,
    "sat_fat_g": 0.356,
    "sodium_mg": 193.0,
    "sugar_g": 0.62,
    "vitamin_a_ug": 104.0,
    "vitamin_c_mg": 9.9,
    "vitamin_e_mg": 0.58,
    "vitamin_k_ug": 16.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709020",
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
