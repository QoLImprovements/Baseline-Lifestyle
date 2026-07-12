/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Stir-fry and soy-based sauce mixtures",
  "id": "usda-fndds-2706650",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 217.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 217.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Pork, rice, and vegetables excluding carrots, broccoli, and dark-green leafy; soy-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 7.75,
    "energy_kcal": 147.0,
    "fat_g": 8.15,
    "fibre_g": 0.9,
    "folate_ug": 19.0,
    "iron_mg": 0.81,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 107.0,
    "potassium_mg": 256.0,
    "protein_g": 10.2,
    "salt_g": 0.5425,
    "sat_fat_g": 1.79,
    "sodium_mg": 217.0,
    "sugar_g": 1.36,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 11.6,
    "vitamin_e_mg": 1.14,
    "vitamin_k_ug": 18.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706650",
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
