/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "1-cup",
  "description": "Rice mixed dishes",
  "id": "usda-fndds-2709018",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 172.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 129.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Rice, white, with dark green vegetables and tomatoes and/or tomato-based sauce, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 21.2,
    "energy_kcal": 99.0,
    "fat_g": 0.28,
    "fibre_g": 0.9,
    "folate_ug": 49.0,
    "iron_mg": 1.03,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 41.0,
    "potassium_mg": 94.0,
    "protein_g": 2.34,
    "salt_g": 0.4975,
    "sat_fat_g": 0.065,
    "sodium_mg": 199.0,
    "sugar_g": 0.65,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 11.3,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 12.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709018",
  "state": "Unspecified",
  "subcategory": "Rice mixed dishes",
  "tags": [
    "condiments-and-sauces",
    "rice-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
