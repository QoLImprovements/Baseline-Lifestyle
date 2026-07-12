/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "g",
  "description": "Manufacturer's data (Nestlé). Average of chocolate, strawberry, banana and vanilla flavours",
  "id": "cofid-current-17-823",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Build up, powder, shake, assorted flavours",
  "nutritionPerBasis": {
    "calcium_mg": 725.0,
    "carbs_g": 63.0,
    "energy_kcal": 325.0,
    "fat_g": 0.7,
    "fibre_g": 8.2,
    "folate_ug": 180.0,
    "iron_mg": 13.38,
    "magnesium_mg": 263.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 600.0,
    "potassium_mg": 1070.0,
    "protein_g": 20.5,
    "salt_g": 0.625,
    "sat_fat_g": 0.4,
    "sodium_mg": 250.0,
    "sugar_g": 62.0,
    "vitamin_a_ug": 900.0,
    "vitamin_c_mg": 65.0,
    "vitamin_e_mg": 10.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-823",
  "state": "Unspecified",
  "subcategory": "PAA",
  "tags": [
    "beverages",
    "paa",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
