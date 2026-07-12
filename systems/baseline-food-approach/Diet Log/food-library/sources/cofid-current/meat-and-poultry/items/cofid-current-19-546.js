/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Beefburgers with added onion. 10 samples, 6 brands, frozen and chilled",
  "id": "cofid-current-19-546",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Burger, beef, 62-85%, beef, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 8.5,
    "energy_kcal": 229.0,
    "fat_g": 13.8,
    "fibre_g": 0.6,
    "folate_ug": 24.0,
    "iron_mg": 2.5,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 200.0,
    "potassium_mg": 270.0,
    "protein_g": 18.3,
    "salt_g": 1.1,
    "sat_fat_g": 5.22,
    "sodium_mg": 440.0,
    "sugar_g": 2.1,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-546",
  "state": "Grilled",
  "subcategory": "MBG",
  "tags": [
    "grilled",
    "mbg",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
