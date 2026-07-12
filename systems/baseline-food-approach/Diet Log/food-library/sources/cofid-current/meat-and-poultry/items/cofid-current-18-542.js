/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "26 samples",
  "id": "cofid-current-18-542",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pork, shoulder chops (collar), braised, lean",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 0.0,
    "energy_kcal": 213.0,
    "fat_g": 10.1,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 1.5,
    "magnesium_mg": 23.0,
    "omega3_g": 0.18,
    "phosphorus_mg": 210.0,
    "potassium_mg": 300.0,
    "protein_g": 30.5,
    "salt_g": 0.1475,
    "sat_fat_g": 3.57,
    "sodium_mg": 59.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-542",
  "state": "Unspecified",
  "subcategory": "MAG",
  "tags": [
    "mag",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
