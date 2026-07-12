/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "g",
  "description": "Beverages",
  "id": "usda-foundation-2257046",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Oat milk, unsweetened, plain, refrigerated",
  "nutritionPerBasis": {
    "calcium_mg": 148.0,
    "carbs_g": 5.1,
    "energy_kcal": 48.3,
    "fat_g": 2.75,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.261,
    "magnesium_mg": 5.91,
    "omega3_g": 0.0,
    "phosphorus_mg": 89.2,
    "potassium_mg": 148.0,
    "protein_g": 0.797,
    "salt_g": 0.105,
    "sat_fat_g": 0.0,
    "sodium_mg": 42.0,
    "sugar_g": 2.32,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2257046",
  "state": "Unspecified",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
