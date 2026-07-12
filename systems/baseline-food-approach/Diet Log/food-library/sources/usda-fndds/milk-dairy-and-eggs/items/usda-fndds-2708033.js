/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Doughnuts, sweet rolls, pastries",
  "id": "usda-fndds-2708033",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 27.0,
      "key": "1-cream-puff",
      "kind": "unit",
      "label": "1 cream puff"
    }
  ],
  "name": "Cream puff, no filling or icing",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 22.8,
    "energy_kcal": 360.0,
    "fat_g": 25.9,
    "fibre_g": 0.8,
    "folate_ug": 53.0,
    "iron_mg": 2.02,
    "magnesium_mg": 12.0,
    "omega3_g": 0.019,
    "phosphorus_mg": 119.0,
    "potassium_mg": 97.0,
    "protein_g": 9.0,
    "salt_g": 1.2075,
    "sat_fat_g": 5.6,
    "sodium_mg": 483.0,
    "sugar_g": 0.25,
    "vitamin_a_ug": 288.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.85,
    "vitamin_k_ug": 24.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708033",
  "state": "Unspecified",
  "subcategory": "Doughnuts, sweet rolls, pastries",
  "tags": [
    "doughnuts-sweet-rolls-pastries",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
