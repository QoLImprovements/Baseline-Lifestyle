/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "1-cup",
  "description": "Stir-fry and soy-based sauce mixtures",
  "id": "usda-fndds-2710064",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 220.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chow mein or chop suey, meatless, no noodles",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 5.74,
    "energy_kcal": 43.0,
    "fat_g": 1.68,
    "fibre_g": 1.2,
    "folate_ug": 40.0,
    "iron_mg": 0.42,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 30.0,
    "potassium_mg": 136.0,
    "protein_g": 1.34,
    "salt_g": 0.86,
    "sat_fat_g": 0.293,
    "sodium_mg": 344.0,
    "sugar_g": 2.63,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 7.2,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 18.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710064",
  "state": "Unspecified",
  "subcategory": "Stir-fry and soy-based sauce mixtures",
  "tags": [
    "condiments-and-sauces",
    "stir-fry-and-soy-based-sauce-mixtures",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
