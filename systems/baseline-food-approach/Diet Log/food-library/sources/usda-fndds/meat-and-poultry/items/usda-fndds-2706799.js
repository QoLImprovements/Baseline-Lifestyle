/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2706799",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 226.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Chicken or turkey salad, made with mayonnaise",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 2.88,
    "energy_kcal": 235.0,
    "fat_g": 18.8,
    "fibre_g": 0.4,
    "folate_ug": 14.0,
    "iron_mg": 0.46,
    "magnesium_mg": 15.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 131.0,
    "potassium_mg": 207.0,
    "protein_g": 13.9,
    "salt_g": 1.21,
    "sat_fat_g": 3.23,
    "sodium_mg": 484.0,
    "sugar_g": 2.1,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.98,
    "vitamin_k_ug": 45.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706799",
  "state": "Unspecified",
  "subcategory": "Poultry mixed dishes",
  "tags": [
    "meat-and-poultry",
    "poultry-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
