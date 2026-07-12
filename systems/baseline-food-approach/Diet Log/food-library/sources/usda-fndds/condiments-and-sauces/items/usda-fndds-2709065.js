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
  "id": "usda-fndds-2709065",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 224.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 168.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Rice, brown, with carrots, dark green vegetables, and tomatoes and/or tomato-based sauce, NS as to fat",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 20.4,
    "energy_kcal": 114.0,
    "fat_g": 2.57,
    "fibre_g": 1.7,
    "folate_ug": 12.0,
    "iron_mg": 0.55,
    "magnesium_mg": 32.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 85.0,
    "potassium_mg": 120.0,
    "protein_g": 2.35,
    "salt_g": 0.4225,
    "sat_fat_g": 0.44,
    "sodium_mg": 169.0,
    "sugar_g": 0.76,
    "vitamin_a_ug": 59.0,
    "vitamin_c_mg": 6.8,
    "vitamin_e_mg": 0.6,
    "vitamin_k_ug": 10.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709065",
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
