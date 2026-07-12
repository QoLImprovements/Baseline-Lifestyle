/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "40 samples. Shaped and flavoured snacks based on maize, potato and wheat including cheese balls",
  "id": "cofid-old-17-128",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Mixed cereal and potato flour snacks",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 56.7,
    "energy_kcal": 449.0,
    "fat_g": 23.1,
    "fibre_g": 0.0,
    "folate_ug": 24.0,
    "iron_mg": 1.1,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 110.0,
    "potassium_mg": 340.0,
    "protein_g": 7.1,
    "salt_g": 4.55,
    "sat_fat_g": 5.5,
    "sodium_mg": 1820.0,
    "sugar_g": 1.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "17-128",
  "state": "Unspecified",
  "subcategory": "SNB",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "snb",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
