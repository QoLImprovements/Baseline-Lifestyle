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
  "id": "usda-fndds-2706765",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 256.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 192.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Pork and onions with soy-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 5.43,
    "energy_kcal": 149.0,
    "fat_g": 9.14,
    "fibre_g": 0.8,
    "folate_ug": 10.0,
    "iron_mg": 0.66,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 112.0,
    "potassium_mg": 261.0,
    "protein_g": 11.1,
    "salt_g": 0.6125,
    "sat_fat_g": 2.0,
    "sodium_mg": 245.0,
    "sugar_g": 2.17,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 3.4,
    "vitamin_e_mg": 1.18,
    "vitamin_k_ug": 16.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706765",
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
