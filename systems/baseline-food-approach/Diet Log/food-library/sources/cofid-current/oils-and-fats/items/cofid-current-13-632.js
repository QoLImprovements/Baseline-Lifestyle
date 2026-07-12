/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "Calculated from boiled. Fat and water analysed, 2017. 11 samples, UK, ends trimmed and peeled. Cut into quarters or halves and coated with 1 tbsp rapeseed oil, roasted for 35-55 minutes",
  "id": "cofid-current-13-632",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Parsnip, roasted in rapeseed oil",
  "nutritionPerBasis": {
    "calcium_mg": 67.0,
    "carbs_g": 28.8,
    "energy_kcal": 158.0,
    "fat_g": 4.5,
    "fibre_g": 5.1,
    "folate_ug": 96.0,
    "iron_mg": 0.86,
    "magnesium_mg": 31.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 108.0,
    "potassium_mg": 626.0,
    "protein_g": 2.4,
    "salt_g": 0.015,
    "sat_fat_g": 0.37,
    "sodium_mg": 6.0,
    "sugar_g": 8.4,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 20.0,
    "vitamin_e_mg": 2.1,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-632",
  "state": "Roasted",
  "subcategory": "DG",
  "tags": [
    "dg",
    "oils-and-fats",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
