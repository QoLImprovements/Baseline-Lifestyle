/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "quantity-not-specified",
  "description": "Rice mixed dishes",
  "id": "usda-fndds-2709025",
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
  "name": "Rice, white, with carrots, dark green vegetables, and tomatoes and/or tomato-based sauce, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 21.4,
    "energy_kcal": 118.0,
    "fat_g": 2.35,
    "fibre_g": 0.9,
    "folate_ug": 47.0,
    "iron_mg": 1.0,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 40.0,
    "potassium_mg": 89.0,
    "protein_g": 2.25,
    "salt_g": 0.485,
    "sat_fat_g": 0.341,
    "sodium_mg": 194.0,
    "sugar_g": 0.71,
    "vitamin_a_ug": 69.0,
    "vitamin_c_mg": 7.9,
    "vitamin_e_mg": 0.58,
    "vitamin_k_ug": 11.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709025",
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
