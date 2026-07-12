/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-cup",
  "description": "Nutritional beverages",
  "id": "usda-fndds-2710717",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 252.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 31.5,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 252.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 252.0,
      "key": "1-bottle-8-fl-oz",
      "kind": "unit",
      "label": "1 bottle (8 fl oz)"
    }
  ],
  "name": "Nutritional drink or shake, ready-to-drink (Ensure)",
  "nutritionPerBasis": {
    "calcium_mg": 127.0,
    "carbs_g": 16.9,
    "energy_kcal": 105.0,
    "fat_g": 2.53,
    "fibre_g": 0.0,
    "folate_ug": 42.0,
    "iron_mg": 1.9,
    "magnesium_mg": 42.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 105.0,
    "potassium_mg": 156.0,
    "protein_g": 3.8,
    "salt_g": 0.21,
    "sat_fat_g": 0.422,
    "sodium_mg": 84.0,
    "sugar_g": 9.7,
    "vitamin_a_ug": 158.0,
    "vitamin_c_mg": 12.7,
    "vitamin_e_mg": 1.42,
    "vitamin_k_ug": 8.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710717",
  "state": "Unspecified",
  "subcategory": "Nutritional beverages",
  "tags": [
    "beverages",
    "nutritional-beverages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
