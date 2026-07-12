/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "1-cup",
  "description": "Soups, broth-based",
  "id": "usda-fndds-2707462",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Soup, lentil",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 10.2,
    "energy_kcal": 60.0,
    "fat_g": 0.69,
    "fibre_g": 3.7,
    "folate_ug": 78.0,
    "iron_mg": 1.36,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 79.0,
    "potassium_mg": 203.0,
    "protein_g": 3.82,
    "salt_g": 0.61,
    "sat_fat_g": 0.098,
    "sodium_mg": 244.0,
    "sugar_g": 1.72,
    "vitamin_a_ug": 52.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 4.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707462",
  "state": "Unspecified",
  "subcategory": "Soups, broth-based",
  "tags": [
    "legumes-and-pulses",
    "soups-broth-based",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
