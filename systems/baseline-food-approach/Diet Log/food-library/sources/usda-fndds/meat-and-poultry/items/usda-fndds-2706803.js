/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2706803",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 226.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken or turkey salad, made with mayonnaise-type salad dressing",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 5.95,
    "energy_kcal": 148.0,
    "fat_g": 7.95,
    "fibre_g": 0.4,
    "folate_ug": 14.0,
    "iron_mg": 0.44,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 127.0,
    "potassium_mg": 208.0,
    "protein_g": 13.7,
    "salt_g": 1.225,
    "sat_fat_g": 1.54,
    "sodium_mg": 490.0,
    "sugar_g": 4.13,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.64,
    "vitamin_k_ug": 20.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706803",
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
