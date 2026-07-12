/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Stir-fry and soy-based sauce mixtures",
  "id": "usda-fndds-2706386",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 183.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Beef with soy-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 3.35,
    "energy_kcal": 187.0,
    "fat_g": 12.4,
    "fibre_g": 0.5,
    "folate_ug": 12.0,
    "iron_mg": 1.51,
    "magnesium_mg": 18.0,
    "omega3_g": 0.009,
    "phosphorus_mg": 115.0,
    "potassium_mg": 211.0,
    "protein_g": 15.9,
    "salt_g": 0.8325,
    "sat_fat_g": 2.74,
    "sodium_mg": 333.0,
    "sugar_g": 1.05,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 2.3,
    "vitamin_e_mg": 1.76,
    "vitamin_k_ug": 22.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706386",
  "state": "Unspecified",
  "subcategory": "Stir-fry and soy-based sauce mixtures",
  "tags": [
    "meat-and-poultry",
    "stir-fry-and-soy-based-sauce-mixtures",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
